"use client";
import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import Header from "@/components/Header";

const SearchPage = () => {
  const { query } = useParams();
  const { filterData, getFilteredData } = useSupabase();

  useEffect(() => {
    getFilteredData(query.toString());
  }, [getFilteredData,query]);

  return (
    <div>
        <Header />
      <SearchResult filterData={filterData} />
    </div>
  );
};

export default SearchPage;
