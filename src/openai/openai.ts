import {Server} from "socket.io";

export function registerSockets(io: Server) {
    io.on("connection", (socket: any) => {
        console.log("socket connected");
        socket.on("disconnect", () => {
            console.log("socket disconnected");
        });
    });
}