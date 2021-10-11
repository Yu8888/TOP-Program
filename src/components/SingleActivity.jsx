import React from "react";

export default function SingleActivity({
  activityName,
  index,
  position,
  removeActivity,
}) {
  return (
    <li data-testid="activity-1">
      {activityName}
      <button
        type="button"
        className="activity-btn"
        onClick={() => {
          removeActivity(index, position);
        }}
      >
        remove
      </button>
    </li>
  );
}
