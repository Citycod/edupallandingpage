import { NextRequest, NextResponse } from "next/server";
import { getSupabase, WaitlistEntry } from "@/lib/supabase";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, university, subscribed_to_updates } = body as WaitlistEntry;

        // Validate required fields
        if (!name || !email || !university) {
            return NextResponse.json(
                { error: "Name, email, and university are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Insert into Supabase
        let supabase;
        try {
            supabase = getSupabase();
        } catch (envError) {
            console.error("Supabase config error:", envError);
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        const { error } = await supabase
            .from("waitlist")
            .insert([
                {
                    name,
                    email,
                    university,
                    subscribed_to_updates: subscribed_to_updates || false,
                },
            ]);

        if (error) {
            console.error("Supabase error details:", {
                message: error.message,
                code: error.code,
                details: error.details,
                hint: error.hint,
            });

            // Check for duplicate email
            if (error.code === "23505") {
                return NextResponse.json(
                    { error: "This email is already on the waitlist!" },
                    { status: 409 }
                );
            }

            // Table doesn't exist
            if (error.code === "42P01" || error.message?.includes("relation") || error.message?.includes("does not exist")) {
                return NextResponse.json(
                    { error: "Database not configured. Please run the SQL setup script in Supabase." },
                    { status: 500 }
                );
            }

            // RLS policy issue
            if (error.code === "42501" || error.message?.includes("policy")) {
                return NextResponse.json(
                    { error: "Database permission error. Please check RLS policies in Supabase." },
                    { status: 500 }
                );
            }

            // Return the actual error for debugging
            return NextResponse.json(
                { error: `Database error: ${error.message}` },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "Successfully joined the waitlist!",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
