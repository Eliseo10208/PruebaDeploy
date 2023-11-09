import { NextResponse } from "next/server";
import Usuario from "@/models/user";
import bcrypt from "bcryptjs";
import { connectarBD } from "@/libs/mongodb";
export async function POST(request: Request) {
    const { email, contraseña, persona } = await request.json();
    console.log(email, contraseña, persona);

    if (!contraseña || contraseña.length < 8)
        return NextResponse.json(
            {
                message: "La contraseña debe tener al menos 8 caracteres",
            },
            {
                status: 400,
            }
        );

    try {
        await connectarBD();
        const UsuarioEncontrado = await Usuario.findOne({ email });
        if (UsuarioEncontrado)
            return NextResponse.json(
                {
                    message: "Ese usuario ya existe",
                },
                {
                    status: 409,
                }
            );

        const contracifrada = await bcrypt.hash(contraseña, 12);
        const user = new Usuario({
            email: email,
            contraseña: contracifrada,
            persona: persona,
        });
        const usuarioguardado = await user.save();
        console.log(usuarioguardado);
        return NextResponse.json(usuarioguardado);
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}