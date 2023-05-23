import React from "react";
import "../About/About.css";
import img44 from "../../assets/photo1678197532.jpg";

const About = () => {
  return (
    <div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block ContainerAbout">
          <img class="mainImg" src={img44} />
          <div class="allText aboveText">
            <p class="text-blk headingText">আমাদের লক্ষ্য</p>
            <p class="text-blk subHeadingText">মশার বংশ করে দেব ধ্বংস.</p>
            <p class="text-blk description">
              আপনি যদি মশার যন্ত্রণায় অতিষ্ঠ এবং আপনি মশার হাত থেকে বাঁচার কোন
              উপায় খুঁজে পাচ্ছেন না ? আমরা MoshaMari Team নিয়ে এসেছি আপানার এই
              যন্ত্রণা থেকে মুক্তি সকল অস্ত্র ।.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
