import { useParams, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { getInsightBySlug, insightArticles } from "@/data/insights";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightBySlug(slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#0c1e24] mb-4">Guide Not Found</h1>
            <Link href="/insights" className="text-amber-600 hover:underline">Return to Insights</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedService = article.relatedService ? servicesData.find(s => s.slug === article.relatedService) : null;
  const otherArticles = insightArticles.filter(a => a.slug !== slug);

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
        title={article.title}
        description={article.description}
        canonical={`/insights/${article.slug}`}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.description,
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
          "url": `https://www.atlascorp.ae/insights/${article.slug}`,
          "mainEntityOfPage": `https://www.atlascorp.ae/insights/${article.slug}`
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0c1e24] pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <Link href="/insights" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Guide</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-3xl">
              {article.title}
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl">{article.description}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              <div className="max-w-none">
                {renderContent(article.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              {/* CTA */}
              <div className="bg-[#0c1e24] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Speak to an Expert</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our team is available to advise on all aspects of DIFC corporate services.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-[#0c1e24] font-semibold text-center py-2.5 px-4 rounded-lg transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Related service */}
              {relatedService && (
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-[#0c1e24] mb-2">Related Service</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedService.tagline}</p>
                  <Link
                    href={`/service/${relatedService.slug}`}
                    className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
                  >
                    {relatedService.title}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Other guides */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#0c1e24] mb-4">Other Guides</h3>
                <ul className="space-y-3">
                  {otherArticles.map(a => (
                    <li key={a.slug}>
                      <Link
                        href={`/insights/${a.slug}`}
                        className="text-sm text-gray-700 hover:text-amber-600 transition-colors leading-snug block"
                      >
                        {a.title}
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
