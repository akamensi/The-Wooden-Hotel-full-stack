import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBookigs } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookigs();
  const { isLoading: isLoading2, stays, confirmedStays } = useRecentStays();
  if (isLoading1 || isLoading2) return <Spinner />;

  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <div>Staistics</div>
      <div>Todays activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
