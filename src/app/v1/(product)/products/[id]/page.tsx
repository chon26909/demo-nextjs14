import Button from '@/components/button/Button';
import { getProductId, getProducts } from '@/services/productService';
import { GetStaticPaths, Metadata, ResolvingMetadata } from 'next';
import Preview from './Preview';

type Params = {
    id: string;
};

type PageProps = {
    params: Params;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     const products = await getProducts({ page: 1, perPage: 50 });

//     let paths: Pick<PageProps, 'params'>[] = [];

//     if (products) {
//         paths = products?.products.map((item) => ({
//             params: {
//                 id: String(item.id)
//             }
//         }));
//     }

//     return {
//         paths: paths,
//         fallback: false
//     };
// };

export async function generateStaticParams() {
    const products = await getProducts({ page: 1, perPage: 50 });

    let paths: { id: string }[] = [];

    if (products) {
        paths = products?.products.map((item) => ({
            id: String(item.id)
        }));
    }

    return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    const data = await getProductId(id);

    return {
        title: data?.title,
        metadataBase: new URL('https://shopy.com'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'th-TH': '/th-TH'
            }
        },
        openGraph: {
            title: data?.title,
            description: data?.description,
            url: 'https://shopy.com/1',
            siteName: 'Shopy',
            images: data?.images.map((image) => {
                return {
                    url: image,
                    width: 800,
                    height: 600
                };
            }),
            locale: 'en_US',
            type: 'website'
        }
    };
}

const ProductPage = async ({ params }: PageProps) => {
    const data = await getProductId(params.id);

    return (
        <div>
            <div>server side</div>
            {data && (
                <div className='grid grid-cols-2 gap-5 mt-20'>
                    <div className='col-span-1'>
                        <Preview images={data.images} thumbnail={data.thumbnail} />
                    </div>
                    <div className='col-span-1 ml-5'>
                        <div className='font-bold text-[42px]'>{data.title}</div>
                        <div>{data.description}</div>
                        <div className='bg-slate-50 mt-2 p-5 flex items-center text-primary'>
                            <span className='text-4xl font-medium select-none'>฿</span>
                            <span className='pl-1 text-3xl font-bold'>{data.price}</span>
                            <span className='bg-primary ml-3 rounded text-white p-1 text-sm select-none'>
                                discount {data.discountPercentage}%
                            </span>
                        </div>
                        <div className='mt-5'>
                            <Button type='button' variant='bordered' className='px-14'>
                                Add to cart
                            </Button>
                            <Button type='button' variant='solid' className='ml-5 px-16'>
                                Buy now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    // return (
    //     <Suspense fallback={<Spinner />}>
    //         {previewImage && (
    //             <ModalPreview
    //                 isShow={true}
    //                 imageUrl={previewImage}
    //                 onClose={() => setModalPreviewImage(false)}
    //             />
    //         )}
    //         <div className='grid grid-cols-2 gap-5 mt-20'>
    //             <div className='col-span-1'>
    //                 {previewImage && (
    //                     <Image
    //                         src={previewImage}
    //                         alt={data.description}
    //                         width={1000}
    //                         height={500}
    //                         className='rounded w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover cursor-pointer'
    //                         onClick={openPreview}
    //                     />
    //                 )}

    //                 <div className='grid grid-cols-5 gap-3 my-5'>
    //                     {data &&
    //                         data.images.map((image, index) => {
    //                             return (
    //                                 <Image
    //                                     key={index}
    //                                     src={image}
    //                                     alt=''
    //                                     width={100}
    //                                     height={100}
    //                                     className='w-full h-[100px] object-cover rounded cursor-pointer shadow-md'
    //                                     onMouseOver={() => handleMouseOver(index)}
    //                                 />
    //                             );
    //                         })}
    //                 </div>
    //             </div>
    //             <div className='col-span-1 ml-5'>
    //                 <div className='font-bold text-[42px]'>{data.title}</div>
    //                 <div>{data.description}</div>
    //                 <div className='bg-slate-50 mt-2 p-5 flex items-center text-primary'>
    //                     <span className='text-4xl font-medium select-none'>฿</span>
    //                     <span className='pl-1 text-3xl font-bold'>{data.price}</span>
    //                     <span className='bg-primary ml-3 rounded text-white p-1 text-sm select-none'>
    //                         discount {data.discountPercentage}%
    //                     </span>
    //                 </div>
    //                 <div className='mt-5'>
    //                     <Button variant='bordered' className='px-14'>
    //                         Add to cart
    //                     </Button>
    //                     <Button variant='solid' className='ml-5 px-16'>
    //                         Buy now
    //                     </Button>
    //                 </div>
    //             </div>
    //         </div>
    //     </Suspense>
    // );
};

export default ProductPage;
