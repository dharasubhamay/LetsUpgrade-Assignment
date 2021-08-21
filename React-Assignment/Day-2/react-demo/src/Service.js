function Service(props) {
    return (
        // <div className="container">
            <div className="card">
                <div className="card-img">
                    <img src={props.img} alt=" " className="card-image" />
                </div>
                <h1 className="card-title">
                    {props.title}
                </h1>
                <h4 className="card-subtit">{props.subtitle}</h4>
                <p className="card-desc">
                    {props.desc}
                </p>
                <p className="btn-parent">
                    <button className="card-btn">
                        Read More
                    </button>
                </p>
            </div>
        // </div>
    )
}


export default Service;