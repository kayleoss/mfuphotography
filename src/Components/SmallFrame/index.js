const SmallFrame = (props) => (
  <div className="row mt-md-5 pt-5">
    {props.direction === 'right' ?
        <>
        <div className="col-sm-6 mt-md-5 pt-5 order-md-last">
            <img 
            src={require(`../../assets/` + props.src)}
            alt={props.alt}
            className="w-100 wow fadeInRight" />
        </div>
        <div className="col-sm-4 offset-md-2 mt-md-5 pt-5 order-md-first">
            <p className="pt-md-5 mt-md-5">{props.description}<br/>
            Price: {props.price}<br/>
            <a href={props.buyLink}>Buy now</a>
            </p>
        </div>
        </>
        :
        <>
        <div className="col-sm-8 mt-md-5 pt-5">
            <img 
            src={require(`../../assets/` + props.src)}
            alt={props.alt}
            className="w-100 wow fadeInLeft" />
        </div>
        <div className="col-sm-2 offset-md-2 mt-md-5 pt-5">
            <p className="pt-md-5 mt-md-5">{props.description}<br/>
            Price: {props.price}<br/>
            <a href={props.buyLink}>Buy now</a>
            </p>
        </div>
        </>
    }
  </div>
)

export default SmallFrame;