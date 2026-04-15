import ScrollFadeIn from './ScrollFadeIn'

export default function MoAVideo() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Video</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">
              Watch: How Siplizumab (TCD601) Works
            </h2>
            <p className="text-navy-400 text-sm mt-3">Placeholder video — final version pending</p>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-navy-950">
            <video
              controls
              muted
              preload="metadata"
              poster="/moa/moa-step-1.png"
              className="w-full h-full object-contain bg-navy-950"
            >
              <source src="/moa/moa-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
