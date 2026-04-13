import { useParams, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

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
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-semibold text-[#0c1e24] mt-6 mb-2">
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
              "url": "https://www.atlascorp.ae/assets/logo-D-IPHjNp.png"
            }
          },
          "url": `https://www.atlascorp.ae/blog/${post.slug}`,
          "mainEntityOfPage": `https://www.atlascorp.ae/blog/${post.slug}`
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0c1e24] pt-32 pb-0">
          <div className="max-w-5xl mx-auto px-6 pb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
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
              <div className="bg-[#0c1e24] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Need Expert Advice?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Speak to the Atlas team about your DIFC corporate services requirements.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-[#0c1e24] font-semibold text-center py-2.5 px-4 rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#0c1e24] mb-4">Recent Articles</h3>
                <ul className="space-y-4">
                  {recentPosts.map(p => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="block group"
                      >
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
      </main>
      <Footer />
    </>
  );
}
