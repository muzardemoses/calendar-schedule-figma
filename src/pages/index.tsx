import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <div className='max-w-7xl w-full py-20 px-20 rounded-3xl flex flex-col gap-8'>
        <div className='w-full flex gap-4 items-center'>

          <div className='w-1/3 flex gap-4 items-center mr-10'>
            <div className='flex gap-2 items-center'>
              <button
                className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
              <button
                className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button
                className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </button>
            </div>
            <button
              className='bg-stone-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
              All Business Section
            </button>
          </div>

          <div className='w-[27%] flex gap-2 items-center'>
            <button
              className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
              Thursday, Feb 15, 2024
            </button>
            <button
              className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className='w-1/4'>
            <button
              className='bg-blue-100 text-black font-semibold text-sm px-3 py-2 rounded-md'>
              Today
            </button>
          </div>
        </div>

        <div>
          {/* remove scroll-bar */}
          <div className="relative overflow-y-scroll hide-scrollbar max-h-[400px] shadow-md rounded-lg"
            style={{
            }}
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="sticky top-0 z-10 text-xs text-center text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    9PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    10PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    11PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    12PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    1PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    2PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    3PM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    4PM
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>Ben</span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-purple-900 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-0 w-[253px] h-8 bg-purple-100 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-purple-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Derek Johnson - Oakland Drive
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 1 End */}
                {/* Row 2 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Sarah
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-orange-700 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-16 w-[253px] h-8 bg-green-50 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-green-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Oliva Smith - 3213 Cherry Garden
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 2 End */}
                {/* Row 3 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Johnson E
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-purple-900 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-0 w-[353px] h-8 bg-pink-50 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-pink-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Carol Shiyu - 200127
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 3 End */}
                {/* Row 4 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Jenny Simpson
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-green-700 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-16 w-[233px] h-8 bg-green-50 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-green-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Adam Lambert - 456 Church ST.
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 4 End */}
                {/* Row 5 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Glen
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-green-700 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-16 w-[330px] h-8 bg-purple-100 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-purple-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Derek Johnson - Oakland Drive
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 5 End */}
                {/* Row 6 */}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Asmee
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-orange-700 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-16 w-[430px] h-8 bg-pink-100 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-pink-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Ron - 728 Sherwood Road
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2.5 py-4 whitespace-nowrap border-r border-gray-200">
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          src={'/portrait.jpg'}
                          alt='man'
                          width={40} height={40} className='rounded-full h-10 w-10' />
                        <div className='flex flex-col'>
                          <span className='text-sm font-semibold text-black'>
                            Robinson
                          </span>
                          <span className='text-xs text-gray-400 font-medium'>
                            2h 30m
                          </span>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center text-gray-400'>
                        <div className='bg-purple-900 h-4 w-4 rounded-full'></div>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="relative px-6 py-4 border-r border-gray-200">
                    <div className='absolute top-5 left-0 w-[225px] h-8 bg-purple-100 flex gap-3 items-center'>
                      <div className='h-full w-1 bg-purple-900'></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      <p className='text-xs text-black font-medium'>
                        Derek Johnson - Oakland Drive
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                  <td className="px-6 py-4 border-r border-gray-200">

                  </td>
                </tr>
                {/* Row 6 End */}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
  )
}
