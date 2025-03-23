import { createTRPCHandler } from "@workspace/api";
import { NextRequest } from "next/server";

// Handle GET requests
export async function GET(req: NextRequest) {
  return createTRPCHandler(req);
}

// Handle POST requests
export async function POST(req: NextRequest) {
  return createTRPCHandler(req);
}
