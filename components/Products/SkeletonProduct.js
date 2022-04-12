const SkeletonProduct = () => {
    return (
        <div class="max-w-xs animate-pulse overflow-hidden rounded-md border shadow-md">
            <div class="h-32 bg-gray-300">
            </div>
            <div class="py-2 px-2 flex flex-col gap-2">
                <div class="bg-gray-300 h-6"></div>
                <div class="bg-gray-300 h-6"></div>

            </div>
        </div>
    )
}

export default SkeletonProduct;