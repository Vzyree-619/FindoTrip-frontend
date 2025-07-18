import Landing from "../../components/tours/Landing";
import TourSection from "../../components/tours/TourSection";
import OtherTours from "../../components/tours/OtherTours";
import { useNavigate } from "@remix-run/react";

export default function Tours() {
  const navigate = useNavigate();
  return (
    <>
      <Landing />
      <TourSection onBookTour={(tour) => navigate(`/tour/${tour.id}`)} />
      <OtherTours />
    </>
  );
}
