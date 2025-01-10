const SupportSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Header */}
      <div className="container mx-auto text-center">
        <h2 className="sub_heading font-extrabold gilray-font">
          We’re here to <span className="text-blueColor">help!</span>
        </h2>
        <p className="mt-4 main_hero_slogan text-gray-600">
          Whether you have questions about our services, need support, or simply
          want to connect, feel free to reach out. Our team is dedicated to
          providing prompt and professional assistance.
        </p>
      </div>

      {/* Support Items */}
      <div className="mt-12 container mx-auto">
        {/* Personalized Support */}
        <div className="border-t-4 gap-5 2xl:gap-10 border-b-4 py-8 flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/contact1.png"
            alt="Personalized Support"
            className="rounded-2xl shadow-md mb-4 w-full xl:w-[400px] 2xl:w-[600px] "
          />
          <div>
            <h3 className="text-xl mt-4 font-extrabold font-gilroy">
              Personalized Support
            </h3>
            <p className="mt-2 text-gray-600 main_hero_slogan">
              When you reach out, you’ll always speak with a real person who
              understands your needs. We’re dedicated to offering customized
              assistance tailored to your specific questions or concerns.
            </p>
          </div>
        </div>

        {/* Fast Response Time */}
        <div className="border-b-4 gap-5 2xl:gap-10 py-8 flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/contact2.png"
            alt="Fast Response Time"
            className="rounded-2xl shadow-md mb-4 w-full xl:w-[400px] 2xl:w-[600px] "
          />
          <div>
            <h3 className="text-xl mt-4 font-extrabold font-gilroy">
              Fast Response Time
            </h3>
            <p className="mt-2 text-gray-600 main_hero_slogan">
              We value your time. Our team is committed to providing prompt
              responses, ensuring that your inquiries are addressed quickly and
              efficiently.
            </p>
          </div>
        </div>

        {/* Expert Guidance */}
        <div className="py-8 flex gap-5 2xl:gap-10 mt-4 flex-col md:flex-row items-center md:items-start">
          <img
            src="/contact3.png"
            alt="Expert Guidance"
            className="rounded-2xl shadow-md w-full xl:w-[400px] 2xl:w-[600px] "
          />
          <div>
            <h3 className="text-xl font-extrabold font-gilroy">
              Expert Guidance
            </h3>
            <p className="mt-2 text-gray-600 main_hero_slogan">
              Whether you have a simple query or need in-depth advice, our
              knowledgeable staff is here to help. With expertise across [your
              services], you’ll get the right solutions, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
