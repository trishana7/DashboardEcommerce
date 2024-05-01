import SkeletonLoader from "../ui/skeleton-loader"

export default async function Dashboard() {
 return ( 
 <>
    <header className='px-6 lg:px-8 pb-4 lg:pb-6 pt-6 lg:pt-10 shadow bg-white mb-1 sticky top-0'>
      <h1 className='text-xl font-semibold flex items-center'>
        <button className='btn-open-menu inline-block lg:hidden mr-6'>
          <i data-feather='menu'></i>
        </button>
        <span>Dashboard</span>
      </h1>
    </header>
    <SkeletonLoader />
 </>
 );
}
