// main.go
package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Enable CORS
	r.Use(cors.Default())

	// Basic routes
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	// Stream routes
	r.GET("/stream", handleStream)

	log.Println("Server starting on :8080")
	r.Run(":8080")
}

func handleStream(c *gin.Context) {
	// Set headers for streaming
	c.Header("Content-Type", "audio/mpeg")
	c.Header("Transfer-Encoding", "chunked")

	// Open the audio file
	audioFile, err := http.Get("https://file-examples.com/storage/fe5467a6a163010b197d4a6/2017/11/file_example_MP3_700KB.mp3")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to open audio file"})
		return
	}
	defer audioFile.Body.Close()

	// Stream the file to client
	c.DataFromReader(
		http.StatusOK,
		audioFile.ContentLength,
		"audio/mpeg",
		audioFile.Body,
		nil,
	)
}
