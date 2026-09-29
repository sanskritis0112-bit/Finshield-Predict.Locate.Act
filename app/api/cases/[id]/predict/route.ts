import { NextResponse } from "next/server";

export async function POST(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  return NextResponse.json({
    caseId: id,
    generatedAt: new Date().toISOString(),
    mode: "synthetic-demo",
    predictions: [
      {
        atmId: "ATM-104",
        location: "Vaishali Nagar",
        probability: 0.87,
        priority: "HIGH",
        timeWindow: "10 PM – 12 AM",
        reasons: ["Previous withdrawals nearby", "Similar case pattern", "Behavioural and temporal match", "External intelligence correlation"],
      },
    ],
  });
}
