"use client";
import Image from "next/image";
import { usePodcast } from "../_providers/podcast";

export function SideBarPodcast() {
  const { podcast } = usePodcast();
  const maxImageNumber = podcast?.["im:image"]?.length ?? 0;
  const imageInfo =
    maxImageNumber > 0
      ? podcast?.["im:image"][maxImageNumber - 1]
      : {
          label: "",
        };

  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow">
      <div className="flex justify-center border-b border-gray-300 pb-6">
        <Image
          src={imageInfo?.label as string}
          width={200}
          height={200}
          alt={podcast?.title.label ?? ""}
        />
      </div>
      <div className="pt-6 pb-6 border-b border-gray-300">
        <h3 className="text-gray-900 font-bold">{podcast?.title.label}</h3>
        <p className="text-gray-900">
          by {podcast?.["im:artist"]?.label ?? ""}
        </p>
      </div>
      <div className="pt-6 pb-6">
        <p className="text-gray-900 font-bold">Description</p>
        <p className="text-gray-900">{podcast?.summary.label}</p>
      </div>
    </div>
  );
}
