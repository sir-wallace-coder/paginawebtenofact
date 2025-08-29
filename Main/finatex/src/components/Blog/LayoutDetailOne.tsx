'use client'

import React, { useState } from 'react'
import blogData from '@/data/blog.json'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation';
import { BlogType } from '@/type/BlogType';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  data: BlogType;
  handleNextBlogDetail: () => void;
  handlePrevBlogDetail: () => void;
}

const LayoutDetailOne: React.FC<Props> = ({ data, handleNextBlogDetail, handlePrevBlogDetail }) => {
  const [category, setCategory] = useState<string | null>('');
  const [tag, setTag] = useState<string | null>('');
  const router = useRouter()

  const handleCategory = (category: string) => {
    router.push(`/blog/blog-list-one?category=${category}`)
  }

  const handleTag = (tag: string) => {
    router.push(`/blog/blog-list-one?tag=${tag}`)
  }

  return (
    <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
      <div className="container">
        <div className="flex max-lg:flex-col-reverse gap-y-10">
          <div className="w-full lg:w-1/3 lg:pr-[55px]">
            <div className="search-block rounded-lg bg-surface h-[50px] relative">
              <input className="rounded-lg bg-surface w-full h-full pl-4 pr-12" type="text" placeholder="Search" />
              <Icon.MagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer' />
            </div>
            <div className="cate-block md:mt-10 mt-6">
              <div className="heading7">Categories</div>
              <div className="list-nav mt-4">
                {['financial planning', 'payment solution', 'cryptocurrency financial', 'blockchain', 'online banking', 'personal financial'].map(item => (
                  <div
                    key={item}
                    className={`nav-item rounded-lg flex items-center justify-between p-3 cursor-pointer text-button text-secondary capitalize ${item === category ? 'active' : ''}`}
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                    <Icon.CaretRight weight="bold" />
                  </div>
                ))}
              </div>
            </div>
            <div className="recent-post-block md:mt-10 mt-6">
              <div className="recent-post-heading heading7">Recent Posts</div>
              <div className="list-recent-post flex flex-col gap-6 mt-4">
                {blogData.slice(4, 7).map(item => (
                  <Link
                    key={item.id}
                    href={"/blog/blog-detail-one/[slug]"}
                    as={"/blog/blog-detail-one/" + item.title.toLowerCase().replace(/ /g, '-')}
                    className="recent-post-item flex items-start gap-4 cursor-pointer"
                  >
                    <div className="item-img flex-shrink-0 w-20 h-20 rounded">
                      <Image width={5000} height={5000} src={item.img} alt={item.title} className='w-full h-full object-cover' />
                    </div>
                    <div className="item-infor w-full">
                      <div className="item-date flex items-center">
                        <Icon.CalendarBlank weight='bold' />
                        <span className="ml-1 caption2">{item.date}</span>
                      </div>
                      <div className="item-title mt-1">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="tags-popular-block md:mt-10 mt-6">
              <div className="tag-heading heading7">Popular Tags</div>
              <div className="list-tag mt-4 flex flex-wrap gap-3">
                {['featured', 'experience', 'interview', 'skill', 'business', 'design'].map(item => (
                  <div
                    key={item}
                    className={`caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer ${item === tag ? 'active' : ''}`}
                    onClick={() => handleTag(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="blog-paragraph">
              <div className="paragraph-heading"><span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white capitalize">{data?.tag || 'Design'}</span>
                <div className="heading4 mt-4">{data?.title || 'Earn good money and make you very successful creative Business'}</div>
                <div className="date flex items-center gap-4 mt-4">
                  <div className="author caption2 text-secondary">by <span className="text-black">{data?.author || 'Avitex'} </span></div>
                  <div className="item-date flex items-center">
                    <Icon.CalendarBlank weight='bold' />
                    <span className="ml-1 caption2">{data?.date || '2 days ago'}</span>
                  </div>
                </div>
                <div className="bg-img mt-8"><Image width={5000} height={5000} className="w-full rounded-2xl" src={data?.img || "/images/blog/930x593.png"} alt="img" /></div>
              </div>
              <div className="paragraph-content mt-8">
                <div className="body2 text-secondary">{`Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance, we empower you to unlock your creative business potential and thrive in today's competitive landscape.`}</div>
                <div className="review pl-4 py-2 border-l-2 border-line mt-4">
                  <div className="body2 italic">“ Seize control of your financial future and unleash your potential for success. Our expert guidance will empower you to navigate the intricacies of financial management. From budgeting and saving to investing and debt management, we provide the tools and knowledge you need to achieve your goals.”.</div>
                  <span className="text-xs uppercase font-bold mt-4">Tony Nguyen, CEO of Avitex</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-7 mt-8">
                {data?.listImg ? data?.listImg.map((item, index) => (
                  <div className="w-full" key={index}> <Image width={5000} height={5000} className="w-full rounded-xl" src={item} alt="img" /></div>
                )) : (
                  <>
                    <div className="w-full"> <Image width={5000} height={5000} className="w-full rounded-xl" src="/images/blog/930x593.png" alt="img" /></div>
                    <div className="w-full"> <Image width={5000} height={5000} className="w-full rounded-xl" src="/images/blog/930x593.png" alt="img" /></div>
                  </>
                )}
              </div>
              <div className="paragraph-content mt-8">
                <div className="heading6">How to Saving Finacial</div>
                <div className="body2 text-secondary mt-4">{`Let us help you navigate the complexities of the financial world, maximize your earnings, and turn your creative passion into a lucrative venture. It's time to unleash your full potential and embark on a journey towards financial prosperity.`}</div>
                <div className="list-feature mt-8">
                  <div className="grid lg:grid-cols-2 gap-y-3">
                    <div className="w-full gap-y-3 flex flex-col">
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Identification of monthly income</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Creation of savings and investment plan</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Management and calculation expenses</div>
                      </div>
                    </div>
                    <div className="w-full gap-y-3 flex flex-col">
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Research and Analysis</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Investment Management and Investment Advice</div>
                      </div>
                      <div className="item flex items-center gap-3">
                        <Icon.CheckCircle weight='fill' className='text-xl text-blue' />
                        <div className="text-button">Education and Resources</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 border border-line"></div>
                <ul className="list-li mt-5 px-3">
                  <li className="body3 text-secondary">15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                  <li className="body3 text-secondary mt-2">Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</li>
                  <li className="body3 text-secondary mt-2">Experience with database systems and database internals, such as query engines and optimizers are a big plus. </li>
                  <li className="body3 text-secondary mt-2">Strong fundamentals in computer science skills.</li>
                </ul>
                <div className="end mt-5 body2 text-secondary">{`Saving money is an essential skill for financial stability and long-term success. We understand the importance of efficient resource management, and we're here to guide you through proven strategies to optimize your financial savings. Our experts will provide you with practical tips and insights, such as budgeting techniques, expense tracking, smart investment options, and ways to reduce unnecessary expenses.`}</div>
              </div>
            </div>
            <div className="blog-more-infor mt-8">
              <div className="infor-above flex items-center justify-between flex-wrap gap-6">
                <div className="tags-cloud-block flex items-center gap-3 max-sm:flex-wrap">
                  <div className="body3">Tag(s):</div>
                  <div className="list-nav flex items-center gap-3 max-sm:flex-wrap">
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('featured')}>Featured</span>
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('interview')}>Interview</span>
                    <span className="caption2 py-2 px-4 bg-surface rounded-2xl hover:bg-black hover:text-white duration-300 cursor-pointer" onClick={() => handleTag('business')}>Business</span></div>
                </div>
                <div className="share-block flex items-center gap-4 max-sm:flex-wrap">
                  <div className="caption2 py-2 px-4 rounded-lg border border-line">Copy the link</div>
                  <div className="social-media flex items-center gap-3 max-sm:flex-wrap">
                    <a href="http://facebook.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-facebook text-black"></i></a>
                    <a href="http://linkedin.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-in text-black"></i></a>
                    <a href="http://twitter.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-twitter text-black text-sm"></i></a>
                    <a href="http://instagram.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-insta text-black text-sm"></i></a>
                    <a href="http://youtube.com" target="_blank" className='w-10 h-10 flex items-center justify-center bg-surface rounded-full hover-box-shadow hover:bg-white duration-300'><i className="icon-youtube text-black text-xs"></i></a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border border-line"></div>
              <div className="infor-below flex max-sm:flex-wrap items-center justify-between gap-6 py-5">
                <div className="prev-block">
                  <div className="text-left cursor-pointer" onClick={handlePrevBlogDetail}>
                    <div className="text-button-uppercase text-blue">Previous</div>
                    <div className="heading7 mt-1">{data?.id === 1 ? blogData[blogData.length - 1]?.title : blogData[data.id - 2].title}</div>
                  </div>
                </div>
                <div className="next-block">
                  <div className="sm:text-right cursor-pointer" onClick={handleNextBlogDetail}>
                    <div className="text-button-uppercase text-blue">Next</div>
                    <div className="heading7 mt-1">{data?.id === blogData.length ? blogData[0].title : blogData[data.id].title}</div>
                  </div>
                </div>
              </div>
              <div className="border border-line"></div>
            </div>
            <div className="blog-form-contact mt-8 md:p-10 p-7 bg-surface rounded-xl">
              <div className="heading7">Leave a Comment</div>
              <form className="form-contact-input mt-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="w-full">
                    <div className="body3 pb-3">Name</div>
                    <input className="bg-white rounded-lg p-4 w-full" type="text" placeholder="Alexander" required />
                  </div>
                  <div className="w-full">
                    <div className="body3 pb-3">Email</div>
                    <input className="bg-white rounded-lg p-4 w-full" type="email" placeholder="avitex@mail.com" required />
                  </div>
                  <div className="w-full sm:col-span-2">
                    <div className="body3 pb-3">Comment</div>
                    <textarea className="bg-white rounded-lg w-full p-4" rows={3} placeholder="Write comment..." required ></textarea>
                  </div>
                  <div className="w-full sm:col-span-2 flex items-center">
                    <input type="checkbox" id='check' name="check" />
                    <label htmlFor='check' className="caption1 pl-2">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                </div>
                <div className="button-block mt-8">
                  <button className="button-main hover:bg-black bg-blue text-white text-button rounded-full">Submit Comment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetailOne