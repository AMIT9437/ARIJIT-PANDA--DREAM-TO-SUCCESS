import React from "react";

const posts = [
  { id: 1, title: "5 Common GST Mistakes to Avoid", excerpt: "Avoid costly errors — learn the common GST mistakes businesses make and how to prevent them." },
  { id: 2, title: "Why Regular Audits are Crucial for Your Business", excerpt: "Audits improve trust and reduce risk. Discover the benefits and best practices." },
  { id: 3, title: "Tax Planning Tips for 2025", excerpt: "Smart tax planning can save you money. Simple strategies to consider this year." },
  { id: 4, title: "Managing Funds for Long-Term Stability", excerpt: "How to plan budgets, allocate capital, and build financial resilience." }
];

export default function Blog() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1>Financial Insights & Updates</h1>
      <p>Stay informed with the latest tips, news, and updates on finance, taxation, and business growth.</p>

      <div style={{ display: "grid", gap: 18, marginTop: 18 }}>
        {posts.map(post => (
          <article key={post.id} style={{ padding: 16, borderRadius: 8, border: "1px solid #eee" }}>
            <h3 style={{ margin: 0 }}>{post.title}</h3>
            <p style={{ color: "#555" }}>{post.excerpt}</p>
            <a href="/" style={{ textDecoration: "none", color: "#0a3d62" }}>Read more →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
