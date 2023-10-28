import { Shopping } from "./Shopping";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const ShoppingContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Shopping data={data} isLoading={isLoading} />;
};
