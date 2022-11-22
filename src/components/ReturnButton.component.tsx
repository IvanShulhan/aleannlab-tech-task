import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  address: string;
}

export const ReturnButton: React.NamedExoticComponent<Props> = React.memo(({ address }) => {
  const navigate = useNavigate();

  return (
  <button 
    className="py-4 px-6 uppercase text-[12px] text-inherit font-bold flex items-center gap-5 bg-[#38456424] rounded-lg"
    onClick={() => navigate(address, {replace: true})}
  >
    <span className="w-2.5 h-[18px] bg-arrow bg-contain bg-no-repeat" />
    RETURN TO JOB BOARD
  </button>
)})