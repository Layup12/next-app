import type { NextApiRequest, NextApiResponse } from "next";

export type Assets = {
    image: string;
    background: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Assets>) {
    res.status(200).json({
        image: "https://static-cse.canva.com/blob/666314/bestfreestockphotos.jpg",
        background:
            "https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg",
    });
}
