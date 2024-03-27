export const Star = () => (
  <div className="stars">
    <div className="star">
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.888 25.5C34.5178 27.9206 27.9206 34.5178 25.5 42.888C23.0794 34.5178 16.4822 27.9206 8.112 25.5C16.4822 23.0794 23.0794 16.4822 25.5 8.112C27.9206 16.4822 34.5178 23.0794 42.888 25.5Z"
          fill="#FFDD2D"
          stroke="#414141"
          stroke-width="2"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 25.5 25.5"
            to="360 25.5 25.5"
            dur="10s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            values="1;1.1;1"
            keyTimes="0;0.5;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  </div>
);
