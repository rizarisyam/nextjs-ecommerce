

const Overlay = (props) => {
    const { children } = props

    return (
        <div className="fixed w-screen flex justify-center items-center h-screen top-0 left-0 right-0 bottom-0 z-10 cursor-pointer" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
            {children}
        </div>
    )
}

export default Overlay