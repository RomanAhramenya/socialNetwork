import React from "react";
import Paginator from "./Paginator";
import User from "./User";

function FindUsers({user,disabledFollowed,unFollowThunk,followThunk,currentPage,onClickCurrentPage,pageSize,totalCount}) {
  return (
    <div>
      <Paginator currentPage={currentPage} onClickCurrentPage={onClickCurrentPage} pageSize={pageSize} totalCount={totalCount}/>
      {user.map((e) =><User key={e.id} e={e}  disabledFollowed={disabledFollowed} unFollowThunk={unFollowThunk} followThunk={followThunk}/>)}
    </div>
  );
}
export default FindUsers;
