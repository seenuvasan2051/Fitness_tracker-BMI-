const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our top workout sessions designed to push your limits and help you achieve your fitness goals. Whether you’re aiming to build strength, enhance endurance, or improve flexibility, we have the perfect session for you!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps are crafted to offer an intense and rewarding experience. Join a community of fitness enthusiasts and take part in challenging workouts that will motivate and inspire you.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
              Burn calories and boost your metabolism with our HIIT sessions. These fast-paced workouts alternate between intense bursts of exercise and short recovery periods, maximizing your workout efficiency.
            </p>
          </div>

          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and increase strength with our strength training bootcamp. Focus on major muscle groups using a combination of free weights, resistance bands, and bodyweight exercises.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              Get your heart pumping with our cardio blast bootcamp. Incorporate a variety of cardiovascular exercises like running, jumping, and cycling to improve cardiovascular health and stamina.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility Focus</h4>
            <p>
              Enhance your core stability and flexibility with our specialized bootcamp. Engage in exercises that strengthen your core while improving overall flexibility and range of motion.
            </p>
          </div>
          <div>
            <h4>Endurance Challenge</h4>
            <p>
              Push your endurance to the next level with our endurance challenge bootcamp. Participate in prolonged, high-intensity workouts designed to improve stamina and mental toughness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
