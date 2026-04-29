import { useParams, Link } from "wouter";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle2 } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#0c1e24] mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-amber-600 hover:underline">Return to Insights</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const recentPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://www.atlascorp.ae/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `[Blog: ${post.title}]\n\n${form.message}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-semibold text-[#0c1e24] mt-10 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-lg font-semibold text-[#0c1e24] mt-6 mb-2">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('**Q:') && line.endsWith('**')) {
        // FAQ question
        elements.push(
          <div key={i} className="mt-6 mb-1">
            <p className="font-semibold text-[#0c1e24] text-base">
              {line.replace(/\*\*/g, '')}
            </p>
          </div>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-semibold text-[#142E36] mt-6 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      } else if (line.startsWith('- ')) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          listItems.push(lines[i].replace('- ', ''));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-outside ml-6 space-y-2 my-4 text-gray-700">
            {listItems.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
        continue;
      } else if (/^\d+\. /.test(line)) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\. /, ''));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal list-outside ml-6 space-y-2 my-4 text-gray-700">
            {listItems.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ol>
        );
        continue;
      } else if (line.trim() !== '') {
        elements.push(
          <p key={i} className="text-gray-700 leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "author": {
            "@type": "Organization",
            "name": "Atlas Corporate Services",
            "url": "https://www.atlascorp.ae"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Atlas Corporate Services",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.atlascorp.ae/logo.png"
            }
          },
          "url": `https://www.atlascorp.ae/blog/${post.slug}/`,
          "mainEntityOfPage": `https://www.atlascorp.ae/blog/${post.slug}/`
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0c1e24] pt-32 pb-0">
          <div className="max-w-5xl mx-auto px-6 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 mt-6 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover rounded-t-xl"
              loading="eager"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
            <article className="flex-1 min-w-0">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-amber-400 pl-5">
                {post.excerpt}
              </p>
              <div className="max-w-none">
                {renderContent(post.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0 space-y-6">
              <div className="bg-[#0c1e24] rounded-xl p-6 text-white sticky top-24">
                <h3 className="font-semibold text-lg mb-2">Need Expert Advice?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Speak to the Atlas team about your DIFC corporate services requirements.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-white font-semibold text-center py-2.5 px-4 rounded-lg transition-colors"
                  style={{ backgroundColor: 'oklch(68.5% 0.169 237.323)' }}
                >
                  Get in Touch
                </Link>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#0c1e24] mb-4">Recent Articles</h3>
                <ul className="space-y-4">
                  {recentPosts.map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="block group">
                        <span className="text-sm font-medium text-gray-600 group-hover:text-amber-600 transition-colors leading-snug block">
                          {p.title}
                        </span>
                        <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {p.category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Speak to an Expert</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c1e24] font-display mb-3">
                Enquire About This Topic
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
                Have questions about {post.category.toLowerCase()} matters in the DIFC? Our specialists are available for a free initial consultation.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0c1e24] mb-2">Thank You</h3>
                <p className="text-slate-500 text-sm mb-6">
                  We have received your enquiry and a member of our team will be in touch shortly.
                </p>
                <Link href="/contact" className="inline-block bg-[#142E36] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#142E36]/90 transition-colors">
                  Visit Our Contact Page
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#142E36]/20 focus:border-[#142E36] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#142E36]/20 focus:border-[#142E36] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#142E36]/20 focus:border-[#142E36] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Message <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#142E36]/20 focus:border-[#142E36] transition-colors resize-none"
                  />
                </div>
                {submitError && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#142E36] hover:bg-[#142E36]/90 disabled:opacity-60 text-white font-semibold py-3 rounded-full text-sm transition-colors"
                >
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <p className="text-xs text-slate-400 text-center">
                  By submitting this form you agree to be contacted by Atlas Corporate Services. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
