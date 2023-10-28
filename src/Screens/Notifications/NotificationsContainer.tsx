import { Notifications } from "./Notifications";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const NotificationsContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Notifications data={data} isLoading={isLoading} />;
};
