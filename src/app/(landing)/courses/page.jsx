import Image from 'next/image';
import Link from 'next/link';
import CourseImage from '@/assets/course.webp';

const CoursesListPage = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <div className='py-10 flex flex-col gap-y-2'>
        <Link href="/courses/1" className="flex gap-x-6 rounded-lg px-4 py-8 border">
          <div className=" flex h-40 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <Image src={CourseImage} alt='Course 1' className='rounded-lg w-40 h-40 object-cover object-left' width="200" height="auto" />
          </div>
          <div>
            <h2 href="#" className="text-2xl font-semibold text-gray-900">
              Course 1
            </h2>
            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat eleifend nisl, non mattis lacus feugiat sed. Quisque imperdiet risus in gravida sollicitudin. Vestibulum eros mi, consequat auctor finibus vitae, dignissim at nunc. Sed et sapien neque. Suspendisse accumsan enim ut justo fermentum iaculis. Suspendisse at maximus lacus, ut suscipit dui. Praesent dui tortor, tincidunt a vulputate varius, pulvinar ac odio. Donec semper, nibh vitae egestas eleifend, dolor tortor commodo eros.</p>
          </div>
        </Link>

        <Link href="/courses/2" className="flex gap-x-6 rounded-lg px-4 py-8 border">
          <div className=" flex h-40 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <Image src={CourseImage} alt='Course 1' className='rounded-lg w-40 h-40 object-cover object-left' width="200" height="auto" />
          </div>
          <div>
            <h2 href="#" className="text-2xl font-semibold text-gray-900">
              Course 2
            </h2>
            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat eleifend nisl, non mattis lacus feugiat sed. Quisque imperdiet risus in gravida sollicitudin. Vestibulum eros mi, consequat auctor finibus vitae, dignissim at nunc. Sed et sapien neque. Suspendisse accumsan enim ut justo fermentum iaculis. Suspendisse at maximus lacus, ut suscipit dui. Praesent dui tortor, tincidunt a vulputate varius, pulvinar ac odio. Donec semper, nibh vitae egestas eleifend, dolor tortor commodo eros.</p>
          </div>
        </Link>


        <Link href="/courses/3" className="flex gap-x-6 rounded-lg px-4 py-8 border">
          <div className=" flex h-40 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <Image src={CourseImage} alt='Course 1' className='rounded-lg w-40 h-40 object-cover object-left' width="200" height="auto" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Course 3
            </h2>
            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat eleifend nisl, non mattis lacus feugiat sed. Quisque imperdiet risus in gravida sollicitudin. Vestibulum eros mi, consequat auctor finibus vitae, dignissim at nunc. Sed et sapien neque. Suspendisse accumsan enim ut justo fermentum iaculis. Suspendisse at maximus lacus, ut suscipit dui. Praesent dui tortor, tincidunt a vulputate varius, pulvinar ac odio. Donec semper, nibh vitae egestas eleifend, dolor tortor commodo eros.</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default CoursesListPage;