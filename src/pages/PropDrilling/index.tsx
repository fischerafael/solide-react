import React from "react";

export const PropDrilling = () => {
  const username = "Dá um Like no vídeo";

  return (
    <div>
      {/* header */}
      <Header avatar={<Avatar username={username} />} />
      {/* main */}
    </div>
  );
};

const Header = ({ avatar }: { avatar: React.ReactNode }) => {
  return (
    <header>
      <img />
      {avatar}
    </header>
  );
};

const Avatar = ({ username }: { username: string }) => {
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};
