import { FC } from 'react'

const UpgradeCTA: FC = () => {
  return (
    <div className="rounded-lg bg-white/90">
      <div className="z-20 mx-auto w-full px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Want to improve your metrics ?</span>
          <span className="my-2 block text-lg font-semibold text-blue-700 sm:text-3xl">
            Upgrade to premium and get access to all features
          </span>
        </h2>
        <div className="lg:mt-0 lg:shrink-0">
          <div className=" inline-flex rounded-md shadow">
            <button
              type="button"
              className="text-small w-full rounded-lg bg-blue-900 px-6 py-4 text-center font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              Upgrade 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpgradeCTA
