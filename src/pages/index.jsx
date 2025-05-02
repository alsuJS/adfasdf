import { Card } from "@/component/Card";
import { TrendingCard } from "@/component/TrendingCard";
import { dataArray } from "@/utilis/data";
import { dataTrend } from "@/utilis/dataTrend";

export default function Home() {
  const trend = dataTrend.sort(
    (a, b) => b.public_reactions_count - a.public_reactions_count
  );
  
  const trendArray = trend.slice(0, 4);

  return (
    <div style={{ maxWidth: "1231px" }}>
      <h1>Tredning</h1>
      <div  style={{ display: "flex", gap:"10px" }}>
      
        {trendArray.map((props)=>{
          return <TrendingCard trend={props}/>
          
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "100%",
          gap: "15px",
        }}
      >
        {dataArray.map((props) => {
          return <Card Ugugdul={props} />;
        })}
      </div>
    </div>
  );
}


