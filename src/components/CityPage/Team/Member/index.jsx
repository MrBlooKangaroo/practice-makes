import React from "react"
import * as s from "./styles.module.css"

import Card from "components/UI/Card"

export const t = {
  title: "Team",
  webLink: "Personal Site",
  heightRatio: 6,
}

const Member = ({
  index,
  cardProps,
  firstName,
  lastName,
  job,
  linkUrl,
  photoUrl,
}) => {
  const fullName = `${firstName} ${lastName}`
  const rowIndex = Math.floor(index / 3)
  let gridColumn, top
  switch (index % 3) {
    case 0:
      gridColumn = 2
      top = `${-25 - rowIndex * t.heightRatio}rem`
      break
    case 1:
      gridColumn = 1
      top = `${-31 - rowIndex * t.heightRatio}rem`
      break
    default:
      gridColumn = 3
      top = `${-27 - rowIndex * t.heightRatio}rem`
      break
  }
  const details = (
    <>
      <span className={s.jobTitle}>{job}</span>
      <a href={linkUrl} className={s.webLink}>
        {t.webLink}
      </a>
    </>
  )
  const sideLabel = <span className={s.sideLabel}>{fullName}</span>
  return (
    <div className={s.member} style={{ gridColumn, top }}>
      <Card
        photoUrl={photoUrl}
        alt={fullName}
        title={fullName}
        details={details}
        sideLabel={sideLabel}
        {...cardProps}
      />
    </div>
  )
}

export default Member
