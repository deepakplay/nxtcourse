'use client';
import Image from 'next/image';
import { useState } from 'react';

import CourseImage from '@/assets/course.webp';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faLock } from '@fortawesome/free-solid-svg-icons';

const chatpers = [
    {
        name: "Chapter 1",
        topics: [
            {
                name: "Introduction",
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae fermentum turpis, sed vulputate arcu. Phasellus lobortis magna quis velit vestibulum porttitor. Phasellus sollicitudin porttitor erat, quis fermentum dolor ultrices ut. Donec viverra purus nec justo mollis posuere. Phasellus gravida pretium metus, eget lobortis metus tempor ut. Sed fringilla erat ac nisi rhoncus, eu placerat sem vulputate. Etiam a purus turpis. Morbi consequat condimentum nulla eu fringilla. Aenean orci urna, hendrerit a convallis eu, sollicitudin ut sapien. In ornare pulvinar fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut laoreet lectus, nec imperdiet mauris.`
                    },
                    {
                        type: 1, // para
                        heading: 'Audience',
                        data: `This tutorial will guide the developers and students who want to learn how to develop a website using Laravel. This tutorial is particularly meant for all those developers who have no prior experience of using Laravel.`
                    },
                    {
                        type: 1, // para
                        heading: 'Prerequisites',
                        data: `Before you start proceeding with this tutorial, we assume that you are familiar with HTML, Core PHP, and Advance PHP. If you are new to any of these concepts, we suggest you to pick tutorials based on these concepts first, to gain a better understanding of Laravel.`
                    },
                    {
                        type: 1, // para
                        heading: '',
                        data: `Please note that we have used Laravel version 5.7 in all the examples.`
                    }
                ]

            },
            {
                name: "About this Course",
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Suspendisse tincidunt tellus ac eros mattis sollicitudin sed vel felis. Integer sit amet porta nisi. Curabitur eu ex quis dolor tincidunt bibendum. Ut imperdiet sagittis felis sed placerat. Pellentesque dapibus condimentum imperdiet. Fusce ultricies fermentum neque, ut malesuada enim faucibus vitae. Praesent quis erat suscipit, laoreet diam quis, convallis mauris.`
                    },
                    {
                        type: 1, // para
                        heading: 'About Author',
                        data: `Donec eu vehicula lacus, in tempor arcu. Suspendisse aliquam dictum condimentum. Nunc ante diam, pharetra sit amet porttitor sit amet, rhoncus quis purus. Nam scelerisque ipsum id porttitor maximus. Morbi ac erat cursus magna viverra pretium vel non urna. In non ipsum libero. Sed elit ex, ultricies at fringilla sed, semper vel leo. In at lectus eu nisl accumsan pulvinar. Fusce elementum dictum lacinia. Maecenas nec cursus odio. Pellentesque elementum risus ut erat ultrices suscipit. Nullam finibus, lacus pellentesque interdum viverra, tortor elit faucibus ante, eget lobortis nibh justo in massa.`
                    }

                ]
            }
        ]
    },
    {
        name: "Chapter 2",
        topics: [
            {
                name: "What is NXT Course",
                protected: true,
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Vivamus efficitur luctus pulvinar. Integer quis ipsum ac dui consequat malesuada at non ante. Mauris a nibh sed massa bibendum auctor. Suspendisse in nisl sed turpis blandit faucibus. Nam nulla nulla, commodo quis orci quis, fringilla mattis elit. Fusce quis lorem ex. Integer molestie, elit et vestibulum tristique, magna ipsum dapibus urna, eu volutpat ex ante et ante. Nam eget risus rhoncus, accumsan urna eu, convallis diam. Mauris odio tortor, pretium vel ipsum quis, volutpat semper sem. In vel consectetur quam. Donec eu viverra magna, nec pulvinar dui. Ut cursus dui metus, eget porttitor diam blandit vel. Ut iaculis enim eu lacus porttitor, vitae semper dui dapibus. Nulla et mi lectus. Nullam faucibus, nulla vel sagittis maximus, nibh libero convallis turpis, sit amet commodo velit libero vitae enim. Vestibulum risus massa, elementum quis faucibus et, posuere nec erat.`
                    },
                    {
                        type: 2, // image
                        heading: 'Course Image',
                        data: CourseImage
                    },
                ]
            },
            {
                name: "Overview of NXT Course",
                protected: true,
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Suspendisse tincidunt tellus ac eros mattis sollicitudin sed vel felis. Integer sit amet porta nisi. Curabitur eu ex quis dolor tincidunt bibendum. Ut imperdiet sagittis felis sed placerat. Pellentesque dapibus condimentum imperdiet. Fusce ultricies fermentum neque, ut malesuada enim faucibus vitae. Praesent quis erat suscipit, laoreet diam quis, convallis mauris.`
                    },
                    {
                        type: 1, // para
                        heading: 'Course',
                        data: `Donec eu vehicula lacus, in tempor arcu. Suspendisse aliquam dictum condimentum. Nunc ante diam, pharetra sit amet porttitor sit amet, rhoncus quis purus. Nam scelerisque ipsum id porttitor maximus. Morbi ac erat cursus magna viverra pretium vel non urna. In non ipsum libero. Sed elit ex, ultricies at fringilla sed, semper vel leo. In at lectus eu nisl accumsan pulvinar. Fusce elementum dictum lacinia. Maecenas nec cursus odio. Pellentesque elementum risus ut erat ultrices suscipit. Nullam finibus, lacus pellentesque interdum viverra, tortor elit faucibus ante, eget lobortis nibh justo in massa.`
                    },
                    {
                        type: 1, // para
                        heading: 'Next topic',
                        data: `Donec eu vehicula lacus, in tempor arcu. Suspendisse aliquam dictum condimentum. Nunc ante diam, pharetra sit amet porttitor sit amet, rhoncus quis purus. Nam scelerisque ipsum id porttitor maximus. Morbi ac erat cursus magna viverra pretium vel non urna. In non ipsum libero. Sed elit ex, ultricies at fringilla sed, semper vel leo. In at lectus eu nisl accumsan pulvinar. Fusce elementum dictum lacinia. Maecenas nec cursus odio. Pellentesque elementum risus ut erat ultrices suscipit. Nullam finibus, lacus pellentesque interdum viverra, tortor elit faucibus ante, eget lobortis nibh justo in massa.`
                    }
                ]
            }
        ]
    },
    {
        name: "Chapter 3",
        protected: true,
        topics: [
            {
                name: "What is NXT Course",
                protected: true,
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Vivamus efficitur luctus pulvinar. Integer quis ipsum ac dui consequat malesuada at non ante. Mauris a nibh sed massa bibendum auctor. Suspendisse in nisl sed turpis blandit faucibus. Nam nulla nulla, commodo quis orci quis, fringilla mattis elit. Fusce quis lorem ex. Integer molestie, elit et vestibulum tristique, magna ipsum dapibus urna, eu volutpat ex ante et ante. Nam eget risus rhoncus, accumsan urna eu, convallis diam. Mauris odio tortor, pretium vel ipsum quis, volutpat semper sem. In vel consectetur quam. Donec eu viverra magna, nec pulvinar dui. Ut cursus dui metus, eget porttitor diam blandit vel. Ut iaculis enim eu lacus porttitor, vitae semper dui dapibus. Nulla et mi lectus. Nullam faucibus, nulla vel sagittis maximus, nibh libero convallis turpis, sit amet commodo velit libero vitae enim. Vestibulum risus massa, elementum quis faucibus et, posuere nec erat.`
                    },
                ]
            },
            {
                name: "Overview of NXT Course",
                protected: true,
                content: [
                    {
                        type: 1, // para
                        heading: '',
                        data: `Vivamus efficitur luctus pulvinar. Integer quis ipsum ac dui consequat malesuada at non ante. Mauris a nibh sed massa bibendum auctor. Suspendisse in nisl sed turpis blandit faucibus. Nam nulla nulla, commodo quis orci quis, fringilla mattis elit. Fusce quis lorem ex. Integer molestie, elit et vestibulum tristique, magna ipsum dapibus urna, eu volutpat ex ante et ante. Nam eget risus rhoncus, accumsan urna eu, convallis diam. Mauris odio tortor, pretium vel ipsum quis, volutpat semper sem. In vel consectetur quam. Donec eu viverra magna, nec pulvinar dui. Ut cursus dui metus, eget porttitor diam blandit vel. Ut iaculis enim eu lacus porttitor, vitae semper dui dapibus. Nulla et mi lectus. Nullam faucibus, nulla vel sagittis maximus, nibh libero convallis turpis, sit amet commodo velit libero vitae enim. Vestibulum risus massa, elementum quis faucibus et, posuere nec erat.`
                    },
                ]
            }
        ]
    }
]

const CoursePage = (props) => {
    const [choosedTopic, setChoosedTopic] = useState(null);

    return (
        <div href="/courses/1" className="flex gap-6 rounded-lg px-4 py-8 mt-5 flex-col">
            <div className=" flex  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <Image src={CourseImage} alt='Course 1' className='rounded-lg w-full h-60 object-cover object-left' width="600" height="auto" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Course 1
                </h2>
                <p className="mt-1 text-gray-700 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat eleifend nisl, non mattis lacus feugiat sed. Quisque imperdiet risus in gravida sollicitudin. Vestibulum eros mi, consequat auctor finibus vitae, dignissim at nunc. Sed et sapien neque. Suspendisse accumsan enim ut justo fermentum iaculis. Suspendisse at maximus lacus, ut suscipit dui. Praesent dui tortor, tincidunt a vulputate varius, pulvinar ac odio. Donec semper, nibh vitae egestas eleifend, dolor tortor commodo eros.
                </p>
            </div>
            <div className='flex'>
                <div className="w-72 py-5">
                    {
                        chatpers.map((chapter, c_idx) => (
                            <details className="group mb-3" open key={c_idx}>
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-slate-50 pl-3 pr-2 py-2">
                                    <span>{chapter.name}</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <ul className="text-neutral-700 mt-3 group-open:animate-fadeIn flex flex-col gap-y-2">
                                    {
                                        chapter.topics.map((topic, t_idx) => (
                                            <li key={t_idx} className={clsx({
                                                'text-neutral-400': topic.protected
                                            })}>
                                                <button
                                                    className='w-full text-left hover:bg-slate-100 px-3 py-1 rounded flex items-center'
                                                    onClick={() => setChoosedTopic({
                                                        chapterIdx: c_idx,
                                                        topicIdx: t_idx
                                                    })}
                                                >
                                                    <span className='mr-2'>
                                                        <FontAwesomeIcon icon={topic.protected ? faLock : faBookOpenReader} />
                                                    </span>
                                                    {topic.name}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </details>
                        ))
                    }
                </div>
                {!!choosedTopic && (
                    <div className='flex-1 p-6 gap-y-2 flex flex-col'>
                        <h1 className="text-2xl font-semibold text-gray-900">{chatpers[choosedTopic.chapterIdx]['topics'][choosedTopic.topicIdx]['name']}</h1>

                        {chatpers[choosedTopic.chapterIdx]['topics'][choosedTopic.topicIdx]['content'].map((item, data_idx) => (
                            <section key={data_idx} className='mb-3'>
                                {!!item?.heading && (
                                    <h2 className='text-xl font-semibold '>{item?.heading}</h2>
                                )}
                                {item.type === 1 && (
                                    <p className='text-gray-700 text-justify'>
                                        {item.data}
                                    </p>
                                )}
                                {item.type === 2 && (
                                    <Image src={item.data} alt='' className='w-full h-96 rounded object-cover object-bottom' />
                                )}
                            </section>
                        )
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CoursePage