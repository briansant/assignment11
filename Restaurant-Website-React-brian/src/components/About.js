import React, { useState, useEffect } from 'react';

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const targetCounts = [20, 78000, 190, 35];
    const duration = 3;
    const easing = t => t;

    useEffect(() => {
        const startTimes = counts.map(() => performance.now());
        const endTimes = startTimes.map(startTime => startTime + duration * 1000);

        const updateCounts = () => {
            const newCounts = counts.map((currentCount, index) => {
                const startTime = startTimes[index];
                const endTime = endTimes[index];
                const now = performance.now();
                const timeElapsed = Math.min(1, (now - startTime) / (endTime - startTime));
                const easedProgress = easing(timeElapsed);
                const targetCount = targetCounts[index];
                return Math.floor(easedProgress * targetCount);
            });
            setCounts(newCounts);

            if (counts.some((currentCount, index) => {
                const endTime = endTimes[index];
                return performance.now() < endTime;
            })) {
                requestAnimationFrame(updateCounts);
            }
        };

        requestAnimationFrame(updateCounts);

        return () => {

            cancelAnimationFrame(updateCounts);
        };
    }, []);



    return (
        <div id="about">

            <br />
            <hr />
            <br />
            <br />
            <span className="firstheading"><h1 >About </h1></span>
            <span className="secondheading"><h1>My Restaurant</h1></span>
            <br />
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.
            </p>

            <br />
            <br />
            <br />
        </div>
    );
}
export default About;