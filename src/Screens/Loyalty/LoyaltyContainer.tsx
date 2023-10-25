import { Loyalty } from "./Loyalty";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const LoyaltyContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Loyalty data={data} isLoading={isLoading} />;
};
