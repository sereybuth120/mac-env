import { ReactNode } from "react";

import Draggable from "../../draggable/draggable";
import "./BaseCard.css";

interface BaseCardType {
  title?: string;
  defaultPost: { x: number; y: number };
  children?: ReactNode;
}

BaseCard.defaultProps = {
  title: undefined,
  children: null,
};

function BaseCard({ title, defaultPost, children }: BaseCardType) {
  return (
    <Draggable defaultPost={defaultPost}>
      <div className="baseCardContainer">
        <div className="baseCardHeader">
          <div style={{ display: "flex", gap: "5px" }}>
            <div className="baseCardActionIcon" style={{ backgroundColor: "var(--red)" }}>
              <span>x</span>
            </div>
            <div className="baseCardActionIcon" style={{ backgroundColor: "var(--yellow)" }}>
              <span>-</span>
            </div>
            <div className="baseCardActionIcon" style={{ backgroundColor: "var(--green)" }}>
              <span>||</span>
            </div>
          </div>
          {title && <div className="baseCardTitle">{title}</div>}
        </div>
        <div>{children}</div>
      </div>
    </Draggable>
  );
}

export default BaseCard;
