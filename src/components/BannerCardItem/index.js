// Write your code here.

import './index.css'

const BannerCards = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="text">{description}</p>
        <button className="show-more-button">Show more</button>
      </div>
    </li>
  )
}
export default BannerCards
