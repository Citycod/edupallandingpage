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
        const supabase = getSupabase();
        const { data, error } = await supabase
            .from("waitlist")
            .insert([
                {
                    name,
                    email,
                    university,
                    subscribed_to_updates: subscribed_to_updates || false,
                },
            ])
            .select()
            .single();

        if (error) {
            // Check for duplicate email
            if (error.code === "23505") {
                return NextResponse.json(
                    { error: "This email is already on the waitlist" },
                    { status: 409 }
                );
            }
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: "Failed to join waitlist. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "Successfully joined the waitlist!",
                data
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
