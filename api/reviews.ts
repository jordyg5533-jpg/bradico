export default async function handler(): Promise<Response> {
  const apiKey = process.env.GOOGLE_PLACES_KEY;
  if (!apiKey) return Response.json({ error: "Not configured" }, { status: 503 });

  try {
    // Direct CID lookup — bypasses textsearch (CID extracted from Google Maps URL)
    const cid = "6730394896287073580";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const detailRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?cid=${cid}&fields=name,rating,user_ratings_total,reviews&language=nl&key=${apiKey}`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);
    const detailData = (await detailRes.json()) as {
      status: string;
      result?: {
        name: string;
        rating: number;
        user_ratings_total: number;
        reviews: Array<{
          author_name: string;
          rating: number;
          text: string;
          relative_time_description: string;
          profile_photo_url: string;
        }>;
      };
    };

    if (detailData.status !== "OK" || !detailData.result) {
      return Response.json({ error: `Details failed: ${detailData.status}` }, { status: 500 });
    }

    return new Response(JSON.stringify(detailData.result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
