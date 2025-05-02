export const TrendingCard = (trend) => {
  return (
    <div
      style={{
        border: "1px solid red",
        width: 300,
        height: 500,
        overflow: "hidden",
        backgroundImage: `url(${trend.trend.cover_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "end",
      }}
    >
  
      <div
        style={{
          padding: 10,
          backgroundColor:"gray",
          opacity:0.8,
          color:"white"
        }}
      >
        <button>{trend.trend.tag_list[0]}</button>
        <p>{trend.trend.description}</p>
      </div>
    </div>
  );
};
