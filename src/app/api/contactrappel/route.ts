export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, contactPref, subject, contactEmail, contactPhone } = body;

    const scriptURL = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptURL) {
      return new Response(JSON.stringify({ error: "GOOGLE_SCRIPT_URL manquant" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const payload = {
      name,
      email,
      contactPref,
      subject,
      contactEmail,
      contactPhone,
    };

    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: "Erreur côté Google Script", details: text }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Formulaire envoyé avec succès ✅" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return new Response(JSON.stringify({ error: "Erreur interne du serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
