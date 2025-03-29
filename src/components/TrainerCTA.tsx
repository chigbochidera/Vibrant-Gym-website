
import AnimatedElement from './AnimatedElement';

const TrainerCTA = () => {
  return (
    <section className="py-20 bg-teal">
      <div className="container mx-auto text-center px-4">
        <AnimatedElement animation="fade">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work with Our Expert Trainers?</h2>
          <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto mb-8">
            Schedule a consultation with one of our certified trainers today at Vibrant Gym in Tamale, Ghana and start your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-golden-yellow text-dark-gray px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Book a Session
            </a>
            <a
              href="/pricing"
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              View Membership Plans
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default TrainerCTA;
