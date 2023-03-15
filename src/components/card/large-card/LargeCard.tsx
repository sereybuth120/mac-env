import BaseCard from "../base-card/BaseCard";
import "./LargeCard.css";

function LargeCard() {
  return (
    <BaseCard defaultPost={{ x: 100, y: 200 }} title="who are we">
      <div className="largeCardContainer">drag me</div>
    </BaseCard>
  );
}

export default LargeCard;
