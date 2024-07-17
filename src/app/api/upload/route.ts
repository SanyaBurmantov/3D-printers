'use server'
import {NextRequest, NextResponse} from "next/server";
import {join} from "path";
import {writeFile, mkdir} from "fs/promises";
import * as fs from "node:fs";
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
    const rootDir= process.cwd();
    const data = await request.formData()
    const files: File[] = [];
    // @ts-ignore
    for (const [key, value] of data.entries()) {
        if (value instanceof File) {
            files.push(value);
        }
    }

    if (!files || files.length === 0) {
        return NextResponse.json({success: false})
    }

    const folderName = uuidv4();
    const folderPath = join(rootDir, 'user-files', folderName);
    await mkdir(folderPath, { recursive: true });

    const filePaths = await Promise.all(files.map(async (file) => {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = join(folderPath, file.name);
        await writeFile(path, buffer)
        return path;
    }));

    return NextResponse.json({message: true, filePaths});
}