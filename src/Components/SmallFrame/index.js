const SmallFrame = (props) => (
  <div className="row mt-5 pt-5">
    {props.direction === 'right' ?
        <>
        <div className="col-sm-4 offset-md-2 mt-5 pt-5">
            <p className="pt-5 mt-5">{props.description}<br/>
            Price: {props.price}<br/>
            <a href={props.buyLink}>Buy now</a>
            </p>
        </div>
        <div className="col-sm-6 mt-5 pt-5">
            <img 
            src={require(`../../assets/` + props.src)}
            alt={props.alt}
            className="w-100 wow fadeInRight" />
        </div>
        </>
        :
        <>
        <div className="col-sm-8 mt-5 pt-5">
            <img 
            src={require(`../../assets/` + props.src)}
            alt={props.alt}
            className="w-100 wow fadeInLeft" />
        </div>
        <div className="col-sm-2 offset-md-2 mt-5 pt-5">
            <p className="pt-5 mt-5">{props.description}<br/>
            Price: {props.price}<br/>
            <a href={props.buyLink}>Buy now</a>
            </p>
        </div>
        </>
    }
  </div>
)

export default SmallFrame;