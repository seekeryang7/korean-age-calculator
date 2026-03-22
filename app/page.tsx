import AgeCalculator from "./components/AgeCalculator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-gray-50 font-sans dark:bg-black">
      {/* Hero */}
      <header className="px-4 pt-16 pb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Korean Age Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          Did you know you might be one or two years older in Korea? Enter your
          birthday to find out your Korean age.
        </p>
      </header>

      {/* Calculator */}
      <section className="px-4 pb-16">
        <AgeCalculator />
      </section>

      {/* Explanation */}
      <section className="border-t border-gray-200 bg-white px-4 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-2xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How Does Korean Age Work?
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              In the traditional Korean age system, a baby is considered 1 year
              old at birth. Everyone then gains one year on January 1st,
              regardless of their actual birthday. This means a Korean person&apos;s
              age can be one or even two years higher than their international
              age.
            </p>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              The formula is simple:{" "}
              <strong className="text-gray-900 dark:text-white">
                Korean Age = Current Year − Birth Year + 1
              </strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Korean Age vs. International Age
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              International age (만 나이, <em>man-nai</em>) counts the actual
              number of full years you&apos;ve been alive since birth. You start at 0
              and gain a year on each birthday. Korean age, on the other hand,
              starts at 1 and increments every New Year&apos;s Day. That&apos;s why
              Koreans often ask &ldquo;What year were you born?&rdquo; instead of &ldquo;How old
              are you?&rdquo;
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2023 Age Reform in South Korea
            </h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              As of June 28, 2023, South Korea officially adopted the
              international age system for all legal and administrative purposes.
              This means that in official documents, contracts, and government
              services, only the international age is used. However, Korean age
              is still widely used in everyday conversation and social settings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 px-4 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-medium text-gray-900 dark:text-white">
                Why am I older in Korea?
              </dt>
              <dd className="mt-1 leading-7 text-gray-600 dark:text-gray-400">
                Because the Korean age system counts the time in the womb as
                your first year, and everyone ages together on New Year&apos;s Day
                rather than on individual birthdays.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900 dark:text-white">
                Is Korean age still used today?
              </dt>
              <dd className="mt-1 leading-7 text-gray-600 dark:text-gray-400">
                Officially, South Korea switched to international age in June
                2023. But in daily life, many Koreans still refer to their
                Korean age in casual conversation.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900 dark:text-white">
                Can my Korean age be 2 years more than my international age?
              </dt>
              <dd className="mt-1 leading-7 text-gray-600 dark:text-gray-400">
                Yes! If you haven&apos;t had your birthday yet this year, your Korean
                age can be 2 years higher. For example, if you were born in
                December, in January your international age hasn&apos;t incremented
                yet, but your Korean age has.

              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900 dark:text-white">
                What is &ldquo;만 나이&rdquo; (man-nai)?
              </dt>
              <dd className="mt-1 leading-7 text-gray-600 dark:text-gray-400">
                만 나이 literally means &ldquo;full age&rdquo; and refers to the
                international age counting system — the way most countries in
                the world calculate age.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500">
        <p>
          Korean Age Calculator &copy; {new Date().getFullYear()}. Built for
          anyone curious about Korean culture.
        </p>
      </footer>
    </div>
  );
}
