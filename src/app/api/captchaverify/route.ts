import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { message, token } = await req.json();

    const secretKey = "6LeVCwosAAAAAF_wiume4x-sEnWrkV3DDH-sPsoc";
    const verify = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        {
            method: "POST",
        }
    );

    const result = await verify.json();

    if (!result.success || result.score < 0.5) {
        return NextResponse.json({ status: "reCAPTCHA failed", result: result }, { status: 400 });
    }

    return NextResponse.json({ status: "Message sent" });
}
